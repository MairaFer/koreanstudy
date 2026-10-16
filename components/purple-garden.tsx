/** Decorative only: never enters the reading or keyboard navigation order. */
export function PurpleGarden() {
  return <div className="purple-garden" aria-hidden="true">
    <svg className="garden-branch" viewBox="0 0 180 420" fill="none" focusable="false">
      <path d="M-12 420C70 330 18 230 115 74M38 315C69 281 106 266 151 256M47 252C27 213 18 172 20 131M72 161C101 142 134 133 171 131" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <g fill="currentColor">
        <path d="M111 83C86 55 111 23 143 10C149 43 136 69 111 83Z"/>
        <path d="M73 158C38 152 28 121 35 93C67 100 82 124 73 158Z"/>
        <path d="M119 141C120 109 147 91 178 96C169 125 150 143 119 141Z"/>
        <path d="M24 190C-5 178-9 153 1 131C26 143 34 164 24 190Z"/>
        <path d="M93 278C99 246 127 233 153 240C143 267 123 282 93 278Z"/>
        <path d="M40 329C10 317 5 291 13 267C40 280 50 302 40 329Z"/>
      </g>
    </svg>
    {[0,1,2,3,4].map(i=><span className={`garden-leaf garden-leaf-${i}`} key={i}><svg viewBox="0 0 32 48" fill="none" focusable="false"><path d="M7 43C-5 25 5 7 28 2C35 23 25 39 7 43Z" fill="currentColor"/><path d="M7 43L24 10" stroke="white" strokeOpacity=".45" strokeWidth="1.2"/></svg></span>)}
  </div>;
}
