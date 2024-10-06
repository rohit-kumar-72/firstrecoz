import { User } from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        // get user details from request
        // check valid data
        // check password and confirmpassword
        // check user already present
        // hash password will work automatically
        // create user
        // return user


        const { email, fullname, password, isAdmin, confirmPassword } = req.body;

        if (!email || !fullname || !password || !confirmPassword) {
            throw new Error("all fields are required")
        }

        if (confirmPassword !== password) {
            throw new Error("password not matched")
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("user already present with same email.")
        }

        const user = await User.create({
            email,
            fullname,
            password,
            isAdmin
        })

        if (!user) {
            throw new Error("server error while creating user")
        }

        return res
            .status(200)
            .json({
                status: 200,
                message: "user created successfully",
                data: user
            })

    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({
                success: false,
                message: error.message || "server error while creating error"
            })
    }
}

export const getAllUser = async (req, res) => {
    try {

        const allUser = await User.find().select("-password");

        if (!allUser) {
            throw new Error("no user found")
        }

        return res
            .status(200)
            .json({
                success: true,
                message: "users found successful",
                data: allUser
            })

    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({
                success: false,
                message: error.message || "server error while fetching all user"
            })
    }
}

export const updateUser = async (req, res) => {
    try {

        // get user details from request
        // validate data
        // update user
        // return user
        // we can also use token to update user

        const { email, fullname, password, isAdmin } = req.body;

        let updateField = {}
        if (!email) {
            throw new Error("email is required to identify user")
        }

        if (fullname.trim()) {
            updateField.fullname = fullname;
        }
        if (password.trim()) {
            updateField.password = password;
        }
        if (isAdmin) {
            updateField.isAdmin = isAdmin;
        }

        const updatedUser = await User.findOneAndUpdate(
            {
                email
            },
            updateField,
            {
                new: true
            }
        ).select("-password")

        if (!updatedUser) {
            throw new Error("server error while updating user")
        }

        return res
            .status(200)
            .json({
                status: 200,
                message: "user updated successfully",
                data: updatedUser
            })

    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({
                success: false,
                message: error.message || "server error while updating user"
            })
    }
}

export const deleteUser = async (req, res) => {
    try {

        // get email and delete

        const { email } = req.body;

        const user = await User.findOneAndDelete({ email })

        return res
            .status(200)
            .json({
                status: 200,
                message: "user deleted successfully",
                data: user
            })

    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({
                success: false,
                message: error.message || "server error while deleting user"
            })
    }
}