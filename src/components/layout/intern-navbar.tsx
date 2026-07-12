"use client";

export function InternNavbar() {
  return (
    <header className="md:hidden sticky top-0 z-50 w-full flex justify-between px-4 bg-surface dark:bg-inverse-surface border-b border-secondary-container dark:border-secondary h-16 items-center">
      <div className="flex items-center gap-2">
        <img src="/logo-32.png" alt="Delta Robotics" className="w-7 h-7 object-contain" />
        <span className="font-headline-md text-headline-md font-bold text-primary-container dark:text-primary-fixed-dim">Delta Robotics</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-on-surface cursor-pointer">search</span>
        <img
          alt="User profile"
          className="w-8 h-8 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBylLapgmrt8GwkUdnWSHmwPzDaMX9WdTCmRf1Z1BwXHcjNv2Abcl10wqXBVNelU9ugSgow9OTT03RBGsHfTbe9nuC20lZXge29q8UR2VwARnwHy0aOmgwYqd0BUg0u82PJGQd1YeJeljoP0lGVe3aSgyUZMYtkiDXHQ_pMN-otwgffbxDzSt2iL1XpNP_G0QdjOu1yYWvcEo63taIZOs1cTLkM4bev8aYQ_HWnq05pgovFi7NUNnk2-g"
        />
      </div>
    </header>
  );
}
