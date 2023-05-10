function Header({data}) {
    return (
        <div className="detail-header my-3">
            <span className="td-cl" >Trang chủ</span> &gt;
            <span className="td-cl" > {data?.tenKhoaHoc}</span>
        </div>
    );
}

export default Header;