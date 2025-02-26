import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
const SignOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            showToast({ message: "Đã đăng xuất", type: "SUCCESS" });
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" });
        }
    })
    const handleClick = () => {
        mutation.mutate();
    }
    return (
        <button onClick={handleClick} className="text-white px-3 font-bold hover:bg-black rounded-lg">
            Đăng xuất
        </button>
    )
}

export default SignOutButton;