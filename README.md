# 📘 CODECHITRA-LMS

*Learn Anytime. Teach Anywhere. A modern LMS platform.*

## 🚀 Demo

Check out the live application here:  
👉 [**CODECHITRA-LMS**](https://codechitra-lms.vercel.app/)

## 📖 Description

CODECHITRA-LMS is a full-fledged Learning Management System built by a passionate Front-End Engineer who also loves to explore the depths of backend and cloud technologies. I enjoy teaching and simplifying web development concepts, and this platform is designed with the vision of one day launching my own coding courses.

This project showcases a complete end-to-end solution — from intuitive user interfaces and seamless UX, to robust backend systems and modern cloud deployment. Built with scalability, performance, and clean architecture in mind, CODECHITRA-LMS reflects my commitment to mastering both front-end and back-end engineering.

## 🚀 Features

- 👨‍🏫 Role-based access: Students and Teachers have different dashboards and capabilities.
- 🧑‍🎓 Students can enroll, track progress, and watch course videos with auto-complete features.
- 📚 Teachers can create, update, and delete courses, manage chapters and sections dynamically.
- 🎬 Secure video uploads using AWS S3 with CloudFront integration for optimized delivery.
- 💳 Payment gateway integration using Stripe for enrolling in paid courses.
- 🧠 Real-time course progress tracking saved in DynamoDB per user and course.
- 🎯 Fully responsive UI built with TailwindCSS + Shadcn and animated with Framer Motion.
- ⚙️ Backend REST API built with Express, hosted on AWS Lambda using Serverless architecture.
- 📦 CI/CD pipeline setup with GitHub Actions and Docker, deploying to AWS Lambda via ECR.
- 🔐 Auth & Authorization handled with Clerk, integrated with frontend and backend.
- 🧪 Strong type safety and form validation using Zod and React Hook Form.

## 🛠 Tech Stack

**Frontend:**
- Next.js
- Tailwind CSS
- Shadcn UI
- Framer Motion
- TypeScript
- Redux Toolkit
- Redux Toolkit Query
- Zod
- React Hook Form

**Backend:**
- Node.js
- Express
- DynamoDB
- Stripe (Payment Integration)

**AWS Infrastructure:**
- AWS Lambda
- Amazon S3
- Amazon CloudFront
- Amazon ECR
- API Gateway

**CI/CD:**
- Docker
- GitHub Actions

## Getting Started

This section will guide you through setting up the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:

* **For the Client (Next.js):**
    * [Node.js 20 or later](https://nodejs.org/)
    * [npm](https://www.npmjs.com/) package manager
* **For the Server (Node/Express):**
    * [Node.js 20 or later](https://nodejs.org/)
    * [npm](https://www.npmjs.com/) package manager
    * **DynamoDB:** This project uses DynamoDB as its database. While DynamoDB is a cloud-based NoSQL database service, you can run a local instance for development purposes. Follow the instructions in this video to set up DynamoDB locally: [https://www.youtube.com/watch?v=pLAC4MfKEa0](https://www.youtube.com/watch?v=pLAC4MfKEa0)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/CodeChitra/codechitra-lms.git
    cd codechitra-lms
    ```

2.  **Install Backend Dependencies (Server):**

    Navigate to the server directory and install the required Node.js packages.

    ```bash
    cd server
    npm install
    ```

3.  **Configure Backend Environment Variables (Server):**

    Create a `.env` file in your `server` directory and configure the following environment variables. **Note:** You will need to obtain the values for your AWS credentials, Clerk API keys, and Stripe API keys.

    ```
    PORT=8001
    NODE_ENV="development"
    AWS_REGION=your_aws_region
    S3_BUCKET_NAME=your_s3_bucket_name
    CLOUDFRONT_DOMAIN=your_cloudfront_domain
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4.  **Install Frontend Dependencies (Client):**

    Navigate to the client directory and install the required Node.js packages.

    ```bash
    cd ../client
    npm install
    ```

5.  **Configure Frontend Environment Variables (Client):**

    Create a `.env.local` file in the `client` directory and configure the following environment variables. **Note:** You will need to obtain the values for your Clerk and Stripe public keys.

    ```
    NEXT_PUBLIC_API_BASE_URL="http://localhost:8001/"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
    NEXT_PUBLIC_STRIPE_REDIRECT_URL=http://localhost:3000/checkout?step=3
    ```

### Running the Application

1.  **Start the Backend Server:**

    Navigate to the `server` directory and start the Node/Express server using the development script.

    ```bash
    cd server
    npm run dev
    ```

    The backend server should start running on `http://localhost:8001`.

2.  **Start the Frontend Development Server:**

    Open a new terminal, navigate to the `client` directory, and start the Next.js development server.

    ```bash
    cd ../client
    npm run dev
    ```

    The Next.js development server will typically start on `http://localhost:3000`.

3.  **Access the Application:**

    Open your web browser and navigate to `http://localhost:3000` to access the frontend of your application. Ensure that your backend server is also running for the application to function correctly.

## CI/CD Pipeline (Backend Deployment)

This project employs a CI/CD pipeline using GitHub Actions to automate the deployment of the backend server to AWS Lambda. The workflow configuration can be found in the `.github/workflows` directory.

### Workflow Details

The deployment pipeline is triggered automatically on every `push` to the `main` branch of this repository.

Here's a breakdown of the steps involved:

1.  **Checkout Code:** The workflow starts by checking out the latest version of the code from the `main` branch onto the GitHub Actions runner.

    ```yaml
    - name: Checkout code
      uses: actions/checkout@v3
    ```

2.  **Configure AWS Credentials:** Secure AWS credentials (Access Key ID and Secret Access Key) are configured using GitHub Secrets. These credentials allow the workflow to interact with your AWS account. The AWS region is set to `ap-south-1`.

    ```yaml
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}
    ```

3.  **Log in to Amazon ECR:** The workflow logs in to your Amazon Elastic Container Registry (ECR) using the provided AWS credentials. This step is necessary to push the Docker image.

    ```yaml
    - name: Log in to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    ```

4.  **Build, Tag, and Push Docker Image to ECR:** This step navigates to the `server` directory, builds a Docker image using the Dockerfile present there, tags it with `latest`, and then pushes this image to your specified ECR repository. The ECR repository name is securely retrieved from GitHub Secrets.

    ```yaml
    - name: Build, tag, and push Docker image to ECR
      working-directory: ./server
      run: |
        IMAGE_TAG=latest
        ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
        ECR_URI=$ACCOUNT_ID.dkr.ecr.${AWS_REGION}[.amazonaws.com/$](https://.amazonaws.com/$){ECR_REPOSITORY}

        docker build -t $ECR_REPOSITORY:$IMAGE_TAG .
        docker tag $ECR_REPOSITORY:$IMAGE_TAG $ECR_URI:$IMAGE_TAG
        docker push $ECR_URI:$IMAGE_TAG

        echo "ECR_URI=$ECR_URI:$IMAGE_TAG" >> $GITHUB_ENV
    ```

5.  **Update Lambda Function with New Image:** Finally, the workflow updates the AWS Lambda function (whose name is stored as a GitHub Secret) with the newly pushed Docker image from ECR. This deploys the latest version of your backend code.

    ```yaml
    - name: Update Lambda function with new image
      run: |
        aws lambda update-function-code \
          --function-name $LAMBDA_FUNCTION_NAME \
          --image-uri $ECR_URI
    ```

### Viewing the Workflow

You can find the complete workflow definition in the following file: `.github/workflows/backend-deployment.yml`

## Acknowledgements / Inspiration

This project was built with the help and inspiration from the following resources:

* **Official Documentations:** The official documentations for the various technologies used in this project were invaluable resources during development.
* **AWS:** I found the content on the [M Prashant](https://www.youtube.com/@MPrashant) YouTube channel to be very helpful in understanding and implementing the AWS services used in the backend.
* **Docker:** The tutorials and explanations provided by the [TechWorld With Nana](https://www.youtube.com/@TechWorldwithNana) YouTube channel were instrumental in setting up and utilizing Docker for this project.
* **Project Inspiration:** The initial inspiration and some of the core ideas for this project came from the content on the [EDROH](https://www.youtube.com/@EdRohDev) YouTube channel.

I am grateful to these resources for their contribution to the successful development of this project.
