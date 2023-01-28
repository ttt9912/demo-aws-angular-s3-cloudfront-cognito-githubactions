## CloudFormation
- create stack and upload cloudformation.yml manually

## S3 deployment
- done using github actions
- user: arn:aws:iam::585098453895:user/s3-website-deployer
- manually create policy for this user to allow upload (arn:aws:iam::585098453895:policy/S3SyncPermission)

## Cognito user pool
- created manually
- set the UserPool ID and ClientID in environment.ts

## OAuth Library
npm install aws-amplify
