using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NaukaIT.DAL.Entities
{
    public class File
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int ClassGroupId { get; set; }
        public string Title { get; set; }
        public string Path { get; set; }
        public bool IsDoc { get; set; }

        public ClassGroup ClassGroup { get; set; }
    }
}
