import React from "react";
import dummyUser from "../../assets/images/user.png";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileCard = ({ nama, role }) => {
  return (
    <Card className="w-[350px] h-[170px] hover:bg-slate-100">
      <CardHeader>
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-center">
            <CardTitle>{nama}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>

          <img
            src={dummyUser}
            alt="dummy_user"
            className="w-14 h-14 rounded-full border-2 border-gray-400"
          />
        </div>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Link to={"/profile"} className="w-full">
          <Button
            className="hover:bg-border border-2 border-border w-full"
            variant="outline">
            <CircleUserRound /> Profil
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
