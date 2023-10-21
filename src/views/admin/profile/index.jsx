import CreateVocab from "./components/CreateVocab";

const ProfileOverview = () => {
  return (
    <div className="">
      <div className="grid h-full  ">
        <div className="col-span-12 lg:col-span-6 lg:mb-0 3xl:col-span-12">
          <CreateVocab />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
