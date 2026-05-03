// ! Use `as` const instead of Enum


// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// };


// const UserRoles = {
//     Admin: "Admin",
//     Editor: "Editor",
//     Viewer: "Viewer"
// } as const;

const UserRoles = {
    Admin: "admin",
    Editor: "Editor",
    Viewer: "VIEWER"
} as const;


// ? 1. typeof operator
// ? 2. keyof operator


// const canEdit = (role: keyof typeof UserRoles) => {
//     if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
//     else return false;
// };


const canEdit = (role: (typeof UserRoles[keyof typeof UserRoles])) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
    else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);

console.log(isEditPermissible);
