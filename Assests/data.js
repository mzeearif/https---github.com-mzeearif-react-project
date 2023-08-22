const categories = [
    {
        name: "HR & Payroll Solutions",
        slug: "hr-payroll-solutions",
        svg: "hr-payroll-solutions.svg",
        id:1,
        expanded: false,
        productGroups: [
            {
                name: "Core HR Software",
                slug: "core-hr-software",
                svg: "core-hr-software.svg",
                id:1,
                products: [
                    {
                        name: "Organisation Structure Solution ",
                        svg: "organisation-structure-solution.svg",
                        panelId: "2",
                    },
                    {
                        // To link to this product, use /hr-payroll-solutions/core-hr-software/#panel-3
                        name: "HR Master Data Solution ",
                        svg: "hr-master-data-solution.svg",
                        panelId: "3",
                    },
                     {
                        name: "Benefits-Management Solution ",
                        svg: "benefits-management-solution.svg",
                        panelId: "4",
                    },
                     {
                        name: "Document Management Solution ",
                        svg: "document-management-solution.svg",
                        panelId: "5",
                    }

                ]
            },

             {
                name: "Payroll Software",
                slug: "payroll-software",
                svg: "payroll-software.svg",
                id:2,
                products: [
                    {
                        name: " Cloud Payroll Solution",
                        svg: "cloud-payroll-solution.svg",
                        panelId: "6",
                    },
                    {
                        // To link to this product, use /hr-payroll-solutions/core-hr-software/#panel-3
                        name: " HR Master Data Solution",
                        svg: "hr-master-data-solution.svg",
                        panelId: "7",
                    },
                     {
                        name: " Benefits-Management Solution",
                        svg: "benefits-management-solution.svg",
                        panelId: "8",
                    },
                     {
                        name: " Document Management Solution",
                        svg: "document-management-solution.svg",
                        panelId: "9",
                    }

                ]
            }
        ]
    },
    {
        name: "HR & Payroll Services",
        slug: "hr-payroll-services",
        svg: "hr-payroll-services.svg",
        id:2,
        expanded: false,

        productGroups: [
            {
                name: "Core HR  Services",
                slug: "core-hr-Services",
                svg: "core-hr-software.svg",
                id:3,
                products: [
                    {
                        name: "Organisation  Structure Solution",
                        svg: "organisation-structure-solution.svg",
                        panelId: "10",
                    },
                    {
                        // To link to this product, use /hr-payroll-solutions/core-hr-software/#panel-3
                        name: "HR Master Data  Solution",
                        svg: "hr-master-data-solution.svg",
                        panelId: "11",
                    },
                     {
                        name: "Benefits -Management Solution",
                        svg: "benefits-management-solution.svg",
                        panelId: "12",
                    }
                ]
            }
        ]
    },
    {
        name: "SAP Products & Services ",
        slug: "sap-products-services",
        svg: "sap-products-services.svg",
        id:3,
        expand:false,
        productGroups: [
            {
                name: "Core HR SAp ",
                slug: "core-hr-sap",
                svg: "core-hr-software.svg",
                id:4,
                products: [
                    {
                        name: "Organisation Structure  Solution",
                        svg: "organisation-structure-solution.svg",
                        panelId: "13",
                    },
                    {
                        // To link to this product, use /hr-payroll-solutions/core-hr-software/#panel-3
                        name: "HR - Master Data Solution",
                        svg: "hr-master-data-solution.svg",
                        panelId: "14",
                    },

                     {
                        name: "Benefits - Management Solution",
                        svg: "benefits-management-solution.svg",
                        panelId: "15",
                    }
                ]
            }
        ]
    },
]

export default categories;
