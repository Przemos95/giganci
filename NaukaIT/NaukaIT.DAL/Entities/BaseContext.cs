using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Entities
{
    public class BaseContext : DbContext
    {
        public BaseContext(DbContextOptions<BaseContext> options) 
            : base(options)
        { }

        public DbSet<ClassGroup> ClassGroups { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
