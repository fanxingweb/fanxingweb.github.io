import ClientIphoneButton from "@/components/client-iphone-button";

export default function BaseContent({ children }) {
  return (
    <div className="base-content w-[70%] mx-auto pt-20 min-h-content overflow-auto">
      {children}
      <div className="right-content fixed right-0 bottom-4 w-[15%]">
        <ClientIphoneButton />
      </div>
    </div>
  );
}
