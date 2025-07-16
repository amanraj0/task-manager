export function userResponseTransformer(user){
    return {
            id: user._id,
            firstName: user.firstName,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
}