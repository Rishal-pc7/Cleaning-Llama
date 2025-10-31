'use client'
import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'
export function Template({children,className}:{children: React.ReactNode,className?:string}) {
  return (
    <motion.div
        initial={{opacity: 0,y:40}}
        animate={{opacity: 1,y:0}}
        transition={{duration:0.5}}
        className={className}>
            {children}
        </motion.div>
  )
}

export function ScrollAnimation({children,className,initialOptions,animatedOptions}:{children:React.ReactNode,className?:string,initialOptions?:object,animatedOptions?:object}) {
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  return (
    <motion.div
        ref={ref}
        initial={{opacity: 0 ,...initialOptions}}
        animate={isInView ? {opacity: 1,...animatedOptions} : {opacity: 0,...initialOptions}}
        transition={{duration:1}}
        className={className}>
          {children}
        </motion.div>

  )
}

