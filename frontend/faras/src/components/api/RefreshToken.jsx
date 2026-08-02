import axios from "axios";

export const refreshAccessToken = async () => {
    const refresh = localStorage.getItem("refresh_token");

    if (!refresh) {
        return null;
    }

    try {
        const res = await axios.post(
            "http://127.0.0.1:8000/api/token/refresh/",
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