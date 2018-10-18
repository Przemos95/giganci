using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace NaukaIT.DAL.Entities
{
    public class ClassGroup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Day { get; set; }
        public string StartTime { get; set; }

        public List<File> Files { get; set; }
    }
}
