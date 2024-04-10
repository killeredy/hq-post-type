import { useBlockProps } from "@wordpress/block-editor";
export default function save() {
  return (
    <p {...useBlockProps.save()}>
      {"Block Show Page – hello from the saved content!"}
    </p>
  );
}
