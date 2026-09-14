import axios from "axios";

export const refreshAccessToken = async () => {
    const refresh = localStorage.getItem("refresh_token");

    if (!refresh) {
        return null;
    }

    try {
        const res = await axios.post(
            import.meta.env.VITE_TOKEN_REFRESH_URL,
            {
                refresh: refresh,
            }
        );

        localStorage.setItem("access_token", res.data.access);

        return res.data.access;
    } catch (error) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return null;
    }
};