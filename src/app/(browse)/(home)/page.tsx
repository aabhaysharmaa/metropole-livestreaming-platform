"use client";

import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";

const Home = () => {
const {collapsed} = useSideBar((state) => state)
  return (
    <div className={cn("flex-1",collapsed ? "ml-17.5" : "md:ml-60")}>
      Home

    </div>
  )
}

export default Home
