import Button from "./Button";
import ModalWrapper from "../../components/modal/ModalWrapper";
import { useModal } from "../../components/modal/useModal";

interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmButtonLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Dialog = () => {
  const { show: open, hide } = useModal();

  return {
    show: (opt: Omit<ConfirmDialogProps, "onCancel">) => {
      open(<Content {...opt} onCancel={hide} />);
    },
  };
};

export const ConfirmDialog = Dialog();

function Content(props: ConfirmDialogProps) {
  return (
    <ModalWrapper className="max-w-[30rem]">
      <div className="p-6 w-full">
        <h3 className="text-base font-semibold">{props.title}</h3>
        <div className="text-sm text-neutral-600 py-4 mb-4">
          {props.message}
        </div>
        <div className="flex gap-2 justify-end">
          <Button onClick={props.onCancel} appearance="outline">
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.onConfirm();
              props.onCancel();
            }}
            variant="primary"
          >
            {props.confirmButtonLabel || "Confirm"}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}
