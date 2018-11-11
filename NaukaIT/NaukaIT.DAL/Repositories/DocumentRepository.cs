using NaukaIT.DAL.DTO;
using NaukaIT.DAL.Entities;
using NaukaIT.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

namespace NaukaIT.DAL.Repositories
{
    public class DocumentRepository : IDocumentRepository
    {
        public byte[] Get(string group, string name, string rootPath)
        {
            var path = $"{rootPath}\\Content\\Documents\\{group}\\{name}.docx";

            if (System.IO.File.Exists(path))
                return System.IO.File.ReadAllBytes(path);
            else
                return null;
        }

        public List<DocumentDTO> GetAll(string group, string rootPath)
        {
            var path = $"{rootPath}\\Content\\Documents\\{group}";
            var list = new List<DocumentDTO>();

            if (System.IO.Directory.Exists(path))
            {
                var files = System.IO.Directory.GetFiles(path);
                foreach (var item in files)
                {
                    list.Add(new DocumentDTO()
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
