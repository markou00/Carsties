"use client";

import { deleteAuction } from "@/lib/actions/auctionActions";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

export default function DeleteButton({ id }: Props) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  async function handleDelete() {
    setLoading(true);
    deleteAuction(id)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        router.push("/");
      })
      .catch((err) => toast.error(err.status + " " + err.message))
      .finally(() => setLoading(false));
  }

  return (
    <Button color="failure" isProcessing={loading} onClick={handleDelete}>
      Delete Auction
    </Button>
  );
}
