using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.DTO
{
    public class ArticleDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Shortcut { get; set; }
        public string HTML { get; set; }
        public string ImgUrl { get; set; }
        public byte[] ImageData { get; set; }
    }
}
