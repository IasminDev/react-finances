import { Header } from "../../components/header/header";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";

export function AccountSettings() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24'>
        <h2 className='roboto-medium text-xl'>Account Settings</h2>
        {/* <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row">
        <div className="flex flex-col p-2 gap-2">
          <label id="description">
            Name{" "}
            <span className="text-xs text-slate-400 ">(max 50 characters)</span>
          </label>
          <Input
            empty={!!infoDesc}
            type="text"
            id="description"
            placeholder="Description"
            maxLength={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col p-2 gap-2">
        <label id="description">
            Email{" "}
            <span className="text-xs text-slate-400 ">(max 50 characters)</span>
          </label>
          <Input
            empty={!!infoDesc}
            type="text"
            id="description"
            placeholder="Description"
            maxLength={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>


        <div className="flex flex-col p-2 gap-2">
        <label id="description">
            Plan{" "}
            <span className="text-xs text-slate-400 ">(max 50 characters)</span>
          </label>
          <Input
            type="text"
            id="description"
            placeholder="Description"
          />
        </div>

      </div>
      <Button
        className="z-0"
        onClick={handleInsert}
        disable={!!infoDesc || !!infoAmount || !!infoSelect || !!infoDate}
      >
        Update
      </Button>
      <Button
        className="z-0"
        onClick={handleInsert}
        disable={!!infoDesc || !!infoAmount || !!infoSelect || !!infoDate}
      >
        Cancel
      </Button> */}
      </div> 
    </div>
  )
}
