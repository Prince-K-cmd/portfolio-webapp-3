import { footerData } from "@/data/footer"

export function Footer() {
  return (
    <footer className="py-6 bg-background border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        {footerData.copyright}
      </div>
    </footer>
  )
}

