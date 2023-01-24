function IdPersonnage(param) {
    const searchParams = new URLSearchParams(window.location.search);

    const id = searchParams.get("id");

    return id;

}

export default IdPersonnage;