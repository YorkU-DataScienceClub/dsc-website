# Getting Started with Contributing to the Data Science Club Website

### Fork and Clone the Repository

1. **Fork the Repository**: Go to the GitHub repository in the organization and click the **Fork** button to create a copy under your account.

2. **Clone the Fork**: Open your terminal and navigate to your desired folder. Clone the repo using SSH (recommended) or HTTPS:

   **SSH**:
   ```bash
   git clone git@github.com:YorkU-DataScienceClub/dsc-website.git
   ```
   **HTTPS**:
   ```bash
   git clone https://github.com/YorkU-DataScienceClub/dsc-website.git
   ```

3. **Navigate to the Project Folder**:
   ```bash
   cd dsc-website
   ```

### Install Dependencies

Run the following command to install the necessary dependencies:
```bash
npm install
```
This will install all dependencies listed in `package.json`, such as `react`, `bootstrap`, and `aos`.

### Create a Branch

Create a new branch using your name to make it easy to track contributions:
```bash
git checkout -b your-own-branch-name
```
For example:
```bash
git checkout -b Ashraf-feature
```
Replace `Ashraf-feature` with a descriptive name for your branch.

### Start Coding

Make the necessary changes or additions in the codebase. If you're working on a specific feature like the chatbot, create a new file and integrate it with `App.js`.

### Commit and Push Changes

1. **Add Changes**:
   ```bash
   git add .
   ```
2. **Commit with a Descriptive Message**:
   ```bash
   git commit -m "Added chatbot component and integrated it"
   ```
3. **Push to Your Branch**:
   ```bash
   git push origin your-own-branch-name
   ```
   For example:
    ```bash
    git push origin Ashraf-feature
    ```

### Create a Pull Request (PR)

1. Go to your forked repository on GitHub.
2. Click on **Compare & pull request** to initiate a PR.
3. Add a brief description and click **Create pull request**.

### Review and Merge

- Once a PR is submitted, it will be reviewed by other team members.
- After approval, it will be merged into the main branch.

### Contributors

- **Mohammed Ashraful Islam** - Initial developer and project lead.
- **Current Tech Leads**: As tech leads contribute, their names and roles will be added here.

  Examples:
  - **Jamie Lee** - Front-end design.
  - **Jordan Smith** - Back-end development.

### Please feel free to reach out if you have any questions.


