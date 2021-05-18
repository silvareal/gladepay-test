export function BreadCrumb() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="50px"
      viewBox="0 0 448 512"
      className="icon"
    >
      <path
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg
      className="search__field__icon search__field__icon--left 
					"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z"
        stroke="#6D6D6D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9999 24L19.6499 19.65"
        stroke="#6D6D6D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OpenNewWindow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      width={15}
      height={15}
      className="icon outbound"
    >
      <path
        fill="currentColor"
        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
      />{" "}
      <polygon
        fill="currentColor"
        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
      />
    </svg>
  );
}
