import React, { useState } from "react";
import dummyUser from "../../assets/images/user.png";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  KeySquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const ProfileCard = ({ id, nama, role }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Popover open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <PopoverTrigger asChild>
            <Button
              className="hover:bg-border border-2 border-border w-full"
              variant="outline">
              {role === "mahasiswa" ? "Mahasiswa" : "Dosen"}
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52 flex flex-col gap-2">
            <>
              <Link to="/profile" className="w-full">
                <Button
                  className="hover:bg-border border-2 border-border w-full"
                  variant="outline">
                  <CircleUserRound /> Biodata
                </Button>
              </Link>
              <Link to={`/change-password/${id}`} className="w-full">
                <Button
                  className="hover:bg-border border-2 border-border w-full"
                  variant="outline">
                  <KeySquare /> Ganti Password
                </Button>
              </Link>
            </>
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
