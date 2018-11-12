using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace NaukaIT.DAL.Repositories
{
    public class FileRepository : IFileRepository
    {
        public byte[] Get(string group, string name, string rootPath)
        {
            var path = $"{rootPath}\\Content\\Files\\{group}\\{name}.zip";

            if (System.IO.File.Exists(path))
                return System.IO.File.ReadAllBytes(path);
            else
                return null;
        }

        public List<FileDTO> GetAll(string group, string rootPath)
        {
            var path = $"{rootPath}\\Content\\Files\\{group}";
            var list = new List<FileDTO>();

            if (System.IO.Directory.Exists(path))
            {
                var files = System.IO.Directory.GetFiles(path);
                foreach (var item in files)
                {
                    list.Add(new FileDTO()
                    {
                        Group = group,
                        Name = item.Substring(0, item.LastIndexOf('.')).Substring(item.LastIndexOf('\\') + 1)
                    });
                }
            }

            return list;
        }
    }
}
