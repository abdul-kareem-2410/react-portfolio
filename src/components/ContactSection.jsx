import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react";
import { cn } from "../lib/util";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you as soon as possible.",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities, my inbox is always open.
          Feel free to reach out, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT INFO SECTION */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-primary" />,
                  label: "Email",
                  value: "abkareem20@outlook.com",
                  href: "mailto:abkareem20@outlook.com",
                },
                {
                  icon: <Phone className="h-6 w-6 text-primary" />,
                  label: "Phone",
                  value: "+92 323 2341530",
                  href: "tel:+923232341530",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                  label: "Address",
                  value: "Karachi, Pakistan",
                  href: null,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex space-x-4 p-4 border rounded-2xl bg-muted/50 items-start"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium mb-1 text-left">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-left">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="https://www.linkedin.com/in/ab-kareem-baa986303/" target="_blank">
                  <Linkedin />
                </a>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="https://x.com/dashingindec" target="_blank">
                  <Twitter />
                </a>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="https://www.instagram.com/sherrysviddiary/" target="_blank">
                  <Instagram />
                </a>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="https://www.youtube.com/@sherrysviddiary" target="_blank">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM SECTION */}
          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="hello@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  "hover:bg-primary/90 transition-colors duration-300"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
