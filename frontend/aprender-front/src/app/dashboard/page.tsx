"use client";
import { useAuth } from "@/hooks/useAuth";
import { getDashboardInfo } from "@/services/authService";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    const [dashboardInfo, setDashboardInfo] = useState<string>("");
    const { logoutUser } = useAuth();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getDashboardInfo();
                setDashboardInfo(res.data.message);
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{dashboardInfo}</p>
            <button
                onClick={() => logoutUser()}
                className="hover:cursor-pointer"
            >
                LogOut
            </button>
        </div>
    );
};

export default DashboardPage;
