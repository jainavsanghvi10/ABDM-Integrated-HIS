# Hospital Information System Integrated with ABDM Sandbox

## Project Overview
This project aims to design and implement a Hospital Information System (HIS) that meets the internal needs of a hospital while integrating seamlessly with Ayushman Bharat Digital Mission (ABDM) Sandbox APIs.

## System Architecture
The system employs a microservices architecture to achieve scalability, modularity, and maintainability. The architecture is driven by ABDM principles of secure data exchange and patient-centric control.
  ### Core Microservices
  1. **Authorization Services**
      * Security Foundation: Ensures authorized access to resources and data using Spring Security and JWT tokens.
      * Role-based Authentication: Manages access control based on user roles such as admin, doctor, nurse, and patient.
  2. **ABDM Gateway Services**
      * Purpose: Facilitates communication with the ABDM network, ensuring data exchange compliance and patient-centric integration.
      * Key Functionalities:
        * ABHA number generation
        * Linking records to ABHA addresses (Care Context creation)
        * Consent management (request, grant, revoke)
        * Secure FHIR data transfer initiation and coordination
        * Fetching patient data from external HIPs with consent
  3. **HMS Services**
      * Purpose: Encapsulates core hospital management functionalities.
      * Key Functionalities:
        * Patient registration and management
        * Staff management (creation, role assignment)
        * Doctor appointment scheduling
        * FHIR bundle generation for data sharing with ABDM

## Link to Backend Codebase and Video
  * Auth Service: [Auth Service](https://github.com/RBang2501/AuthService-ABDM.git)
  * Gateway Service: [Gateway Service](https://github.com/RBang2501/GatewayService-ABDM.git)
  * HMS Service: [HMS Service](https://github.com/RBang2501/HMS-Service-ABDM.git)
  * Video Demo: [Youtube](https://youtu.be/yu5kOX9tTHg)

## Tech Stack
  ### Backend
    * Java 11+
    * Spring Boot: Framework for building the microservices architecture, providing ease of development and integration with other services.
    * Spring Security: Used for implementing robust authentication and authorization mechanisms.
    * JWT (JSON Web Tokens): Utilized for secure token-based authentication.
    * MongoDB: NoSQL database used for storing patient records, user data, and other information.
  
  ### Frontend
    * React: A JavaScript library for building user interfaces, providing a responsive and dynamic user experience.
  
  ### Integration and Communication
    * RESTful APIs: Used for communication between microservices and the frontend.
    * FHIR (Fast Healthcare Interoperability Resources): Standard for healthcare data exchange, ensuring interoperability between different health IT systems.
    * ABDM Sandbox APIs: Provides integration points for various functionalities such as ABHA number generation, consent management, and secure data exchange. Key APIs include:

## Security and Technical Safeguards
  * Cryptographic Security: Utilizes SHA-256 for hashing critical patient-related data, ensuring data integrity and security.
  * Symmetric Key Algorithm: Efficient for encrypting and decrypting large amounts of data.

## Challenges Faced
  * ABHA App Downtime: The application experienced unplanned downtimes.
  * Data Transfer Workflow Issues: Problems with the ABDM side workflow required mocking some workflows.
  * FHIR Bundle Creation and Validation: Lack of resources for creation and validation posed challenges.
