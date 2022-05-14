import React from "react";
import "./_style.scss";

export default function RightBlock() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12156.950642838241!2d71.8208133!3d40.381425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc5f34ff62a53bc84!2z0JDQstGC0L7QntC50L3QsA!5e0!3m2!1sru!2sru!4v1652416862952!5m2!1sru!2sru"
        className="footer_map_iframe"
        title="avtooyna"
      ></iframe>
    </div>
  );
}
