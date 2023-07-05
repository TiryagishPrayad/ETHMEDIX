


 Ethmedix - Health Record Management System

Ethmedix is a decentralized Health Record Management System that allows users to upload and manage health records securely on the Ethereum blockchain. It provides an interface for uploading, accessing, and sharing health records with authorized parties, including hospitals and doctors.

Features

- Upload health records in various formats such as PDFs,images and other formats too .
- Store health records securely on the Ethereum blockchain using smart contracts.
- Grant access to health records for authorized users, including hospitals and doctors.
- Display health records in a grid view for easy browsing.
- Share health records with hospitals and doctors for collaboration and consultation.

 Technologies Used

- React.js: Front-end JavaScript library for building user interfaces.
- Ethereum: Blockchain platform for storing health records using smart contracts.
- Solidity: Smart contract programming language for Ethereum.
- Hardhat: Ethereum development environment for building and testing smart contracts.
- Pinata: It is a decentralised storage used for pinning files to IPFS.


Getting  Started


1. Clone the repository:

  
   git clone https://github.com/your-username/ethmedix.git
   

2. Install dependencies:

   
   cd ethmedix
   npm install
 
// installing dependencies is important such that no errors are occured during the execution of the project..



3. Set up the Ethereum development environment:
   - Install Hardhat globally:

     npm install -g hardhat
    

   - Start a local Ethereum network:

     
     npx hardhat node
     

   - Deploy the smart contracts:

     npx hardhat run --network localhost scripts/deploy.js


   - Update the contract address and ABI in the `App.js` file to match your deployed smart contract.

4. Run the application:

   ```shell
   cd web4
   npm start
   ```

5. Access the application:
   - Open your web browser and visit `http://localhost:3000` to access the Ethmedix Health Record Management System.

6. Share records with hospitals/doctors:
   - Implement a user interface in the application to allow users to share health records with hospitals and doctors.
   - Use smart contract functions and events to handle the sharing and access control logic.
   - Update the UI to display shared records for hospitals and doctors and allow them to view the records.

## Contributing

Contributions to Ethmedix are welcome! If you have any bug fixes, enhancements, or new features to propose, please submit a pull request. For major changes, please open an issue first to discuss the changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```

Feel free to customize the README.md file further to include any additional information or instructions specific to your project.
