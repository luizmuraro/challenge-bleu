## BLEU CHALLENGE

This project is a simple React component that demonstrates how to interact with the Balancer Pool metadata contract at Sepolia. The idea was to create a simple dAPP, with a intuitive UI and simple to use.

## Deployed Version
[Link to Deployed Version](https://challenge-bleu.vercel.app/).

## Video Walkthrough
[Video apresnetation](https://www.loom.com/share/e01daed176a34c7aaf3450dd2f73345a?sid=0e074e85-840b-49c7-b88f-937f652d7619).

## Setup and Running Instructions
- Fisrt you need to clone this respository ``git clone https://github.com/luizmuraro/challenge-bleu.git``.
- After that you need to run ``yarn``  or ``npm install`` to install all node modules.
- Now you are good to go, just run ``yarn dev`` and check the App at browser, by default the port is 3000.
OBs: This app's uses Ponder to list all your pools, if you want to test all features, you can check and run [this](https://github.com/luizmuraro/bleu-ponder) project.

## Implemented features
- Search bar to get the metadata of a given poolId.
- Side bar with all pools from the user.
- Modal with a form, to vizualize and edit pool's metadata.

## Priorities 
  My idea doing the project was prioritize all things related with web3:
 
- I've started building a simple search bar, to be able to read a contract.
- After that, I build a simple form to be able to write a contract.
- Later I did the Modal, that it´s responsible for all the metadata vizualization.
- And last, I did the sidebar, integrated with the Ponder project.

## Architecture

The idea was to do a modular project, differing and separating all types of files, such as UI files, logic files, hooks, infrascrture codes etc..
Unfortunly I was not able to do everything that I want, but my main idea was:

- Modularity: The project should be modular, with clear separation between different types of functionality (e.g., UI components, API logic, infrastructure code).
- Reusability: Components should be broken down into smaller, reusable pieces, which promotes code reuse and easier maintenance.
- Scalability: The structure is designed to scale, allowing for easy addition of new features without significant refactoring.
- Separation of Concerns: The code should be organized to separate different concerns (e.g., UI, state management, API calls), making the codebase easier to navigate and understand.
  

