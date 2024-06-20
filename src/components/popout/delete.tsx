import { ComponentProps, Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { api } from "../../lib/server";

interface DeleteProps extends ComponentProps<"div"> {
  openDelete?: boolean;
  goals?: boolean;
  savings?: boolean;
  revenueId?: number;
  userId?: string;
  userToken?: string;
  setOpenDeleteProps: Dispatch<SetStateAction<boolean>>;
}

export function Delete({
  openDelete,
  goals,
  savings,
  revenueId,
  userId,
  userToken,
  setOpenDeleteProps,
}: DeleteProps) {
  const handleDelete = () => {
    if (savings) {
      api
        .delete(`/${userId}/revenues/${revenueId}`, {
          headers: { token: `Bearer ${userToken}` },
        })
        .then(() => {
          console.log(`Revenue with ID ${revenueId} deleted successfully`);
          setOpenDeleteProps(false);
        })
        .catch((error) => {
          console.error("Error deleting revenue:", error);
        });
    } else {
      console.error("Missing userId or revenueId");
    }
  };

  return (
    <div
      className={twMerge(
        `fixed inset-0 flex items-center justify-center z-50`,
        openDelete ? "flex" : "hidden"
      )}
    >
      <div className="w-80 h-50 bg-slate-700 rounded-md border border-white/10 p-4 flex flex-col items-center justify-between">
        <p className="mb-4 text-center">
          Are you sure you want to delete this {goals ? "goal" : "transaction"}?
        </p>
        <div className="flex space-x-2">
          <Button onClick={handleDelete}>Confirm</Button>
          <Button onClick={() => setOpenDeleteProps(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
