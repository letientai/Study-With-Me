function Header({data}) {
    return (
        <div className="detail-header mb-3">
            <span className="td-cl" >Trang chủ</span> &gt;
            <span className="td-cl" > {data?.tenKhoaHoc}</span>
        </div>
    );
}

export default Header;