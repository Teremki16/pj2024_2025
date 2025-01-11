using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gun : MonoBehaviour
{
    [SerializeField] private GameObject bulletPrefab;

    private void Update()
    {
        if(Input.GetKeyDown(KeyCode.LeftControl))
        {
            SpawnBullet();
        }
    }

     public void SpawnBullet()
    {
        Instantiate(bulletPrefab, transform.GetChild(0).transform.position, Quaternion.identity);
    }
}
