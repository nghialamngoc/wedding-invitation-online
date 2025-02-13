import Dialog, {
  DialogBody,
  DialogContent,
  DialogOverlay,
} from "@/app/ui/Dialog";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Image from "next/image";

export const QRBank = NiceModal.create(() => {
  const modal = useModal();

  return (
    <Dialog isOpen={modal.visible} onOpen={modal.show} onHide={modal.hide}>
      <DialogOverlay />
      <DialogContent className="bg-[#fbf4d5] pt-2">
        <DialogBody className="flex items-center justify-center">
          <Image src="/assets/qr.jpg" width={200} height={300} alt="qr" />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
});
