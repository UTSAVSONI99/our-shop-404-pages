
export type notFoundPagesPageType = {
    title: string,
    message: string,
    note: string,
    button: {
        text: string,
        link: string,
    }
}
const underMantaince = {
    title: "Site Under Manintance",
    message: "We’re currently performing maintenance on this store. If you are the owner, please log in to the admin panel to manage your store.",
    note: "This store has expired but is still under maintenance for the next 7 days. Please check back soon or contact support for assistance.",
    button: {
        text: "Login to Admin panel",
        link: "",
    }
} satisfies notFoundPagesPageType

const expiredStore = {
    title: "Store is Expired",
    message: "This domain name is available for you to create your own website! ",
    note: "Ready to start? Click the link below to set up your new store today.",
    button: {
        text: "Create Your Store",
        link: ""
    }
} satisfies notFoundPagesPageType

const blockedAccount = {
    title: "Account is blocked",
    message: "Your account has been temporarily blocked. Please contact support for assistance.",
    note: "If you are the owner, please log in via the admin panel to manage your store.or contact support at [Link]",
    button: {
        text: "Login to AdminPanel",
        link: ""
    }
} satisfies notFoundPagesPageType

const generalInfo = {
    title: "Create Your Online Store!",
    message: "Looking to start your own online shop? This domain is available for you! ",
    note: "Get started now by clicking the link below!",
    button: {
        text: "Create Your Store",
        link: ""
    }
} satisfies notFoundPagesPageType

const manintanceMode = {
    title: "We are undergoing maintenance",
    message: "",
    note: "This store has expired but is still under maintenance for the next 7 days. Please check back soon or contact support for assistance.",
    button: {
        text: "",
        link: ""
    }
} satisfies notFoundPagesPageType

const underDevelopment = {
    title: "Site Under Development",
    message: "",
    note: "",
    button: {
        text: "",
        link: ""
    }
} satisfies notFoundPagesPageType

const domainAvailable = {
    title: "Domain Name Is Available",
    message: "",
    note: "",
    button: {
        text: "",
        link: ""
    }
} satisfies notFoundPagesPageType

const reportedUnsafe = {
    title: "Reported Unsafe By User's",
    message: "This Store has been Reported unsafe by may users.Your account has been temporarily blocked. Please contact support for assistance.",
    note: "If you are the owner, please log in via the admin panel to manage your store.or contact support at [Link]",
    button: {
        text: "Login to AdminPanel",
        link: ""
    }
} satisfies notFoundPagesPageType



export const notFoundPages = {
    underMantaince: underMantaince,
    expiredStore: expiredStore,
    blockedAccount: blockedAccount,
    generalInfo: generalInfo,
    manintanceMode: manintanceMode,
    underDevelopment: underDevelopment,
    // domainAvailable: domainAvailable,
    reportedUnsafe: reportedUnsafe,





}

