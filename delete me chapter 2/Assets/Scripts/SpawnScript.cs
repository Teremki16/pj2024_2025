using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnScript : MonoBehaviour
{
    [SerializeField] GameObject food;

    void Start()
    {
        StartCoroutine(Spawn());        
    }

    IEnumerator Spawn()
    {
        while (true)
        {
            Vector3 pos = new Vector3(
                Random.Range(-11, 11),
                Random.Range(-5, 5),
                0
                );
            Instantiate(food, pos, Quaternion.identity);
            yield return new WaitForSeconds(Random.Range(0.5f, 2f));
        }
    }
}
