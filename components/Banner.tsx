const Banner = () => {
  return (
    <>
      <div
        className="aspect-16/5 bg-cover bg-center bg-fixed bg-no-repeat  hidden lg:block  "
        style={{
          backgroundImage: `url("https://backend.riiseyasociados.com.ar/images-static/home.jpg?v=10")`,
        }}
      />
      <div className="lg:hidden">
        <img
          src="https://backend.riiseyasociados.com.ar/images-static/home.jpg?v=10"
          alt="Banner"
          className="w-full"
        />
      </div>
    </>
  );
};

export default Banner;
