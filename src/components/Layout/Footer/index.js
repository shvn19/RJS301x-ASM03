export const Footer = () => {
  return (
    <>
      <div className="bg-color-primary px-[100px] py-12 grid grid-cols-3 text-white italic">
        <div>
          <h3 className="mb-3 font-bold">CUSTOMER SERVICES</h3>
          <div className="grid gap-2 text-slate-500">
            <p>Help & Contact us</p>
            <p>Returns & Refunds</p>
            <p>Online Stores</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold">COMPANY</h3>
          <div className="grid gap-2 text-slate-500">
            <p>What we do</p>
            <p>Available Services</p>
            <p>Latest Posts</p>
            <p>FAQs</p>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold">SOCIAL MEDIA</h3>
          <div className="grid gap-2 text-slate-500">
            <p>Twitter</p>
            <p>Telegram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
    </>
  )
}