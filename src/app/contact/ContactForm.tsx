"use client"

import { Button } from "@/components/ui/button"
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(7, { message: "Phone must be at least 7 characters." }).optional(),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
})
const forms=[
    {
        name:"fullname",
        label:"Full Name",
        placeholder:"Full Name",
        type:"text",
        key:"username",
    },
    {
        name:"email",
        label:"Email Address",
        placeholder:"Email Address",
        type:"email",
        key:"email",
    },
    {
        name:"phone",
        label:"Phone Number",
        placeholder:"Phone Number",
        type:"tel",
        key:"phone",
    },
    {
        name:"message",
        label:"Message",
        placeholder:"Your Message",
        type:"text",
        key:"message",

    }

]
function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  
  return (
    <div className="p-10 md:p-20 max-w-3xl mx-auto">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {
            forms.map((f)=>(
                <FormField
                 key={f.key} 
                 control={form.control}
                 name={f.name as keyof z.infer<typeof formSchema>}
                 render={({ field }) => (
                <FormItem>
                   <FormLabel className="font-semibold font-urbanist text-[#1C4177] text-lg">{f.label}</FormLabel>
                   <FormControl>
                       {f.name==="message" ? <Textarea key={f.key} placeholder={f.placeholder} {...field} /> :
                       <Input key={f.key} placeholder={f.placeholder} type={f.type} {...field} />
                 }
                    </FormControl>
                    <FormMessage />
                </FormItem>
               )}/>

            ))
        }
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}
export default ContactForm