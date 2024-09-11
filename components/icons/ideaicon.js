const IdeaIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    >
      <g>
        <path d="M20,5a10,10,0,0,0-10,10c0,5.25,10,15,10,15s10-9.75,10-15A10,10,0,0,0,20,5Zm0,14a4,4,0,1,1,4-4A4,4,0,0,1,20,19Z" fill="currentColor"/>
        <rect x="19" y="25" width="2" height="5" fill="currentColor"/>
        <rect x="19" y="32" width="2" height="2" fill="currentColor"/>
      </g>
    </svg>
  )
}

export default IdeaIcon
