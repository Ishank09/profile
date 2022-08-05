import coursera from  '../assets/svg/certificate/coursera1.svg';
import mongoDb from  '../assets/svg/certificate/MongoDB_Logo_RGB_Logo_White.svg';
import hackerrank from  '../assets/svg/certificate/hackerrank.svg';
import udemy from  '../assets/svg/certificate/udemy.svg';
import dell from  '../assets/svg/certificate/dell.svg';


export const certificateData = [
    {
        id: 1,
        issuingOrganization: 'MongoDB University',
        name: 'M001: MongoDB Basics',
        issueDate: 'January 2018',
        credentialId: 'c1c7e0a7-7b33-417f-8154-510b1b18', 
        credentialUrl: 'https://university.mongodb.com/course_completion/c1c7e0a7-7b33-417f-8154-510b1b18/printable',
        issuingOrganizationLogo :mongoDb
    },
    {
        id: 2,
        issuingOrganization: 'Coursera',
        name: 'Python Data Structures by University of Michigan',
        issueDate: 'Apri 2018',
        credentialId: 'T39992QXSUCX', 
        credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/T39992QXSUCX',
        issuingOrganizationLogo : coursera
    },
    {
        id: 3,
        issuingOrganization: 'Coursera',
        name: 'Neural Networks and Deep Learning',
        issueDate: 'June 2019',
        credentialId: 'XHYLQ6QGF323', 
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/XHYLQ6QGF323',
        issuingOrganizationLogo : coursera
    },
    {
        id: 4,
        issuingOrganization: 'Coursera',
        name: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
        issueDate: 'June 2019',
        credentialId: 'EZ6E25ABG3FX', 
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/EZ6E25ABG3FX',
        issuingOrganizationLogo : coursera
    },
    {
        id: 5,
        issuingOrganization: 'Coursera',
        name: 'Structuring Machine Learning Projects',
        issueDate: 'June 2019',
        credentialId: 'YLMMGEER5ZFP', 
        credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/YLMMGEER5ZFP',
        issuingOrganizationLogo : coursera
    },
    {
        id: 6,
        issuingOrganization: 'Coursera',
        name: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
        issueDate: 'July 2019',
        credentialId: 'U4272ETX3EE2', 
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/U4272ETX3EE2',
        issuingOrganizationLogo : coursera
    },
    {
        id: 7,
        issuingOrganization: 'HackerRank',
        name: 'SQL (Basic)',
        issueDate: 'September 2020',
        credentialId: 'e9e4b0b32ee1', 
        credentialUrl: 'https://www.hackerrank.com/certificates/e9e4b0b32ee1',
        issuingOrganizationLogo : hackerrank
    },
    {
        id: 8,
        issuingOrganization: 'HackerRank',
        name: 'Problem Solving (Basic)',
        issueDate: 'September 2020',
        credentialId: 'f3b0f2c82de1', 
        credentialUrl: 'https://www.hackerrank.com/certificates/f3b0f2c82de1',
        issuingOrganizationLogo : hackerrank
    },
    {
        id: 8,
        issuingOrganization: 'HackerRank',
        name: 'Problem Solving (Intermediate)',
        issueDate: 'September 2020',
        credentialId: 'c9c3bcdd7268', 
        credentialUrl: 'https://www.hackerrank.com/certificates/c9c3bcdd7268',
        issuingOrganizationLogo : hackerrank
    },
    {
        id: 8,
        issuingOrganization: 'HackerRank',
        name: 'Problem Solving (Advanced)',
        issueDate: 'September 2020',
        credentialId: 'a04d4d7d0f08', 
        credentialUrl: 'https://www.hackerrank.com/certificates/a04d4d7d0f08',
        issuingOrganizationLogo : hackerrank
    },
    {
        id: 9,
        issuingOrganization: 'Udemy',
        name: 'Kubernetes for the Absolute Beginners - Hands-on',
        issueDate: 'June 2020',
        credentialId: 'UC-ae6c6216-82d2-4a05-a441-78a2231a83f2', 
        credentialUrl: 'http://ude.my/UC-ae6c6216-82d2-4a05-a441-78a2231a83f2',
        issuingOrganizationLogo : udemy
    }
    ,
    {
        id: 10,
        issuingOrganization: 'Udemy',
        name: 'ASP.NET Web API 2 Hands-On',
        issueDate: 'Oct 2019',
        credentialId: 'UC-NRS2TSPY', 
        credentialUrl: 'http://ude.my/UC-NRS2TSPY',
        issuingOrganizationLogo : udemy
    }
    ,
    {
        id: 11,
        issuingOrganization: 'Udemy',
        name: ' Using SOLID Principles to Write Better Code - A Crash Course',
        issueDate: 'October 2021',
        credentialId: 'UC-b59b16de-89ce-4425-aee5-89fbbf5726ff', 
        credentialUrl: 'https://delldigital.udemy.com/certificate/UC-b59b16de-89ce-4425-aee5-89fbbf5726ff/',
        issuingOrganizationLogo : udemy
    },
    {
        id: 12,
        issuingOrganization: 'Udemy',
        name: ' Software Architecture: Dependency Injection for C# Devs',
        issueDate: 'November 2021',
        credentialId: 'UC-d2f96936-5e2a-4b2f-8814-4ef10e4cc325', 
        credentialUrl: 'https://delldigital.udemy.com/certificate/UC-d2f96936-5e2a-4b2f-8814-4ef10e4cc325/',
        issuingOrganizationLogo : udemy
    },
    {
        id: 13,
        issuingOrganization: 'Udemy',
        name: ' Dependency Injection in .NET Core & .NET 5 (Second Edition)',
        issueDate: 'November 2021',
        credentialId: 'UC-9ea453e2-27b9-4ab3-936b-c0209a8efe7f', 
        credentialUrl: 'https://delldigital.udemy.com/certificate/UC-9ea453e2-27b9-4ab3-936b-c0209a8efe7f/',
        issuingOrganizationLogo : udemy
    },
    {
        id: 14,
        issuingOrganization: 'Dell',
        name: 'Introduction to Data Engineering',
        issueDate: 'July 2022',
        credentialId: '', 
        credentialUrl: 'https://drive.google.com/file/d/1kk0QsqOMQ-mc5e5jEl2Hy_WNOfrlaYig/view?usp=sharing',
        issuingOrganizationLogo : dell
    }
    ,
    {
        id: 15,
        issuingOrganization: 'Dell',
        name: 'Data Warehousing with SQL and NoSQL - On-Demand Lab',
        issueDate: 'July 2022',
        credentialId: '', 
        credentialUrl: 'https://drive.google.com/file/d/1iD4Z-h2OlqUqL3rnkKNDL9T1BZOTWRu7/view?usp=sharing',
        issuingOrganizationLogo : dell
    }
    ,
    {
        id: 16,
        issuingOrganization: 'Dell',
        name: 'Data Warehousing with SQL and NoSQL - On-Demand Course',
        issueDate: 'July 2022',
        credentialId: '', 
        credentialUrl: 'https://drive.google.com/file/d/10DJXITA9CVpHlqdtmyW4XQjQiR_DenBn/view?usp=sharing',
        issuingOrganizationLogo : dell
    }
    ,
    {
        id: 17,
        issuingOrganization: 'Dell',
        name: 'Data Science and Big Data Analytics v2 On-Demand Lab - Europe ',
        issueDate: 'July 2022',
        credentialId: '', 
        credentialUrl: 'https://drive.google.com/file/d/1CGV-djObLZsNtfwM_QoTMV4_VavImh-e/view?usp=sharing',
        issuingOrganizationLogo : dell
    },
    {
        id: 18,
        issuingOrganization: 'Dell',
        name: 'DCA-Data Science Associate Version 2.0 - Internal ',
        issueDate: 'July 2022',
        credentialId: '', 
        credentialUrl: 'https://drive.google.com/file/d/1_heiEUBSTu5k_ImQZlGo9wydDNemgj0q/view?usp=sharing',
        issuingOrganizationLogo : dell
    }
]