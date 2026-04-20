"use client";
import { font } from "@/lib/theme";
import { EditableText } from "@/components/EditableText";

export function SlideFooter({
  slideKey,
  slideNum,
  sectionLabel,
  light = false,
}: {
  slideKey: string;
  slideNum: string;
  sectionLabel: string;
  light?: boolean;
}) {
  const textColor = light ? "rgba(5,10,12,0.30)" : "rgba(255,255,255,0.28)";
  const borderColor = light ? "rgba(5,10,12,0.10)" : "rgba(77,186,214,0.10)";

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
        borderTop: `1px solid ${borderColor}`,
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
          color: textColor,
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
          color: textColor,
          fontFamily: font,
          textTransform: "lowercase",
        }}
      >
        {slideNum} / {sectionLabel}
      </EditableText>
    </div>
  );
}
