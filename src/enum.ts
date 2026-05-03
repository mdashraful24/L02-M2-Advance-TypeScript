// ! Explore Enum


// * set of fixed string literal ek jaugai rakhe


// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
};

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);


// ! শুধু file compile করতে চাইলে => tsc ./src/enum.ts --ignoreConfig
