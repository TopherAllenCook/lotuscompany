"use client";
import { font } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";

export function SlideFooter({
  slideKey,
  slideNum,
  sectionLabel,
}: {
  slideKey: string;
  slideNum: string;
  sectionLabel: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "0 64px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 5,
        borderTop: "1px solid rgba(77,186,214,0.10)",
        paddingTop: 14,
      }}
    >
      <EditableText
        id={`${slideKey}:footer-left`}
        label="footer left"
        as="span"
        style={{
          fontSize: 9,
          letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.28)",
          fontFamily: font,
          textTransform: "lowercase",
        }}
      >
        lotus impact initiative
      </EditableText>
      <EditableText
        id={`${slideKey}:footer-right`}
        label="footer right"
        as="span"
        style={{
          fontSize: 9,
          letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.28)",
          fontFamily: font,
          textTransform: "lowercase",
        }}
      >
        {slideNum} / {sectionLabel}
      </EditableText>
    </div>
  );
}
